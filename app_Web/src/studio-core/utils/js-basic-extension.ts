// 扩展Object方法，删除所有元素不改变内存地址
Object.defineProperty(Object.prototype, 'clearAll', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function() {
        if (this) {
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        }
    }
});