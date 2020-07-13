// 要求：
// 1.给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231, 231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


    // func1： 翻转字符串方法
        // 1. 首先设置边界极值;
        // 2. 使用字符串的翻转函数进行主逻辑; 
        // 3. 补充符号
        // 4. 然后拼接最终结果
    /**
     * 
     * @param {number} x
     * @return {number} 
     */
    
    const reverseFun = (x) => {
        
        // 非空判断
        if(typeof x !== 'number') {
            return false;
        }

        // 极值 int极值
        const MIN = -2147483648;
        const MAX = 2147483647;

        // 识别数字剩余部分并反转
        const rest = 
            x > 0 
                ? String(x).split('').reverse().join('')
                : String(x).slice(1).split('').reverse().join('')

        const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10)
        
        if (result >= MIN && result <= MAX) {
            return result
        }
        return 0

    }
    // console.log(`反转整数正整数` + reverseFun(5324))
    // console.log(`反转整数负整数` + reverseFun(-5324))
    /**
     * 总结：
     * 时间复杂度: O(n)
        代码中 reverseFun 函数时间复杂度为 O(n) ，n 为整数长度，因此时间复杂度为 O(n) ，考虑 到32位整数最大长度为11，即-2147483648，也可认为是常数时间复杂度 O(1)。 空间复杂度: O(n)
        代码中创建临时 String 对象， n 为整数长度，因此空间复杂度为 O(n) ，考虑到32位整数 最大长度为11，即-2147483648，因此空间复杂度为 O(1)。
     */



    // func2： 类似 欧几里得算法 求解
    //  1. 设置边界极值;
    //  2. 取给定数值的绝对值，遍历循环生成每一位数字，借鉴欧几里得算法，从 num 的最后一位开
    //  始取值拼成新的数
    //  3. 同步剔除掉被消费的部分
    //  4. 如果最终结果为异常值，则直接返回 0;如果原本数据为负数，则对最终结果取反
    //  5. 返回最终结果
    
    /**
     * 
     * @param {number} x
     * @return {number} 
     */
    const reverseFun2 = (x) => {
        let int = Math.abs(x) // 参数绝对值

        // 极值 int极值
        const MIN = -2147483648;
        const MAX = 2147483647;
        let num = 0;
        while(int !== 0) {
            // 借鉴欧几里得算法，从 num 的最后一位开始取值拼成新的数
            num = (int % 10) + (num * 10)
            // 剔除掉被消费的部分
            int = Math.floor(int / 10)
        }

        if (num > MIN || num < MAX) {
            return 0
        }
        if(num < 0) {
            return num * -1
        }
        return num

    }
    console.log(`反转整数正整数` + reverseFun(5324))
    console.log(`反转整数负整数` + reverseFun(-5324))

    /**
     * 总结
     * 时间复杂度: O(n)
        代码中使用for循环，次数为 n，即整数的长度，因此时间复杂度为 O(n)。 
     * 空间复杂度: O(1)
        算法中只用到常数个变量，因此空间复杂度为 O(1)。
     */