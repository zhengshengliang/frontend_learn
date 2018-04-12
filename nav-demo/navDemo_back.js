class navDemo {
    constructor() {

    }

    /**
     * 初始化函数
     */
    init () {
        this.keys = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm']
        ];

        this.defaultHash = {
            q: 'qq.com',
            w: 'weibo.com',
            y: 'youtube.com',
            t: 'tianya.com',
            z: 'zhengshengliang.com'
        };

        this.getHashFromLocalStorage();

        this.generateKeyBoard();

        this.bindEvent();
    }

    getHashFromLocalStorage() {
        const savedHashStr = localStorage.getItem('hash');
        const savedHash = savedHashStr ? JSON.parse(savedHashStr) : this.defaultHash;
        this.defaultHash = savedHash;
    }

    /**
     * 添加事件
     */
    bindEvent() {
        // todo onkeydown onkeypress
        document.onkeypress = (e) => {
            console.log(e);
            const key = e.key;
            const domain = this.defaultHash[key];
            domain && window.open('http://' + domain);
        }
    }

    /**
     * 生成键盘布局
     */
    generateKeyBoard() {
        this.keys.forEach((outItem, outIndex) => {
            const div = document.createElement('div');
            div.className = 'out-div';
            outItem.forEach((innerItem, innerIndex) => {
                const span = document.createElement('span');
                span.textContent = this.keys[outIndex][innerIndex];
                span.className = 'text';

                const kbd = document.createElement('kbd');
                kbd.appendChild(span);
                kbd.className = 'key';

                const img = document.createElement('img');

                img.className = 'icon-img'
                const domain = this.defaultHash[kbd.textContent];
                if (domain) {
                    img.src = 'http://' + domain + '/favicon.ico';
                } else {
                    img.src  = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                }

                img.onerror = (e) => {
                    e.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                
                const button = document.createElement('button');
                button.id = this.keys[outIndex][innerIndex];
                button.textContent = '编辑';
                button.onclick = (e) => {
                    const key = e.target.id;
                    const web = prompt('给我一个网站');

                    const img = e.target.previousSibling;
                    img.src = 'http://' + web + '/favicon.ico';

                    this.defaultHash[key] = web;
                    localStorage.setItem('hash', JSON.stringify(this.defaultHash));
                }

                kbd.appendChild(img);
                kbd.appendChild(button);

                div.appendChild(kbd);
            })
            content.appendChild(div);
        })
    }
}

const nd = new navDemo();
nd.init();