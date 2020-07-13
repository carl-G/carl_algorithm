// 要求
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 

// 思路1:利用数组sort()方法
/**
 * 1. 首先，将字符串转为数组。
 * 2. 利用数组 sort 方法进行排序。
 * 3. 然后，转为字符串进行比较，如果相等返回 true，反之返回 false。
 * @param {*} s 
 * @param {*} t 
 * @return {Boolean}
 */
const isAnagram = (s,t) => {
    const ArrS = s.split('').sort()
    const Arrt = t.split('').sort()
    return ArrS.join('') === Arrt.join('')
}
// console.log(isAnagram('asd','dsas'))
/**
 * 总结
 * 时间复杂度: O(nlogn)
 *  JavaScript 的 sort 方法的实现原理，当数组长度小于等于 10 的时候，采用插入排序，大于10的时候，采用快排，快排的平均时间复杂度是 O(nlogn)。
 * 空间复杂度: O(n) 
 * 算法中申请了 2 个数组变量用于存放字符串分割后的字符串数组，所以数 组空间长度跟字符串长度线性相关，所以为 O(n)。
 */


 //思路2:计数累加方法

 /**
  * 1. 首先，声明一个变量，遍历其中一个字符串 s 或 t，对每个字母出现的次数进行累加。
  * 2. 然后，遍历另一个字符串，使每一个字母在已得到􏰀的对象中做匹配，如果匹配则对象下的字母个数减 1，如果匹配不到，则返回 false，如果最后对象中每个字母个数都为 0，则表示两字 符串相等。
  * @param {*} s 
  * @param {*} t 
  * @return {Boolean}
  */
 const isAnagram2 = (s, t) => {
    if(s.length !== t.length) {
        return false
    }
    const hash = {}
    for (const k of s) {
        hash[k] = hash[k] || 0
        hash[k] += 1
    }
    for (const k of t) {
        if(!hash[k]) {
            return false
        }
        hash[k] -= 1
    }
    return true
    
 }
 console.log(isAnagram2('asd','dsas'))
 /**
 * 总结
 * 时间复杂度: O(n)
 *  算法中使用了2个单层循环，因此，时间复杂度为 O(n)。
 * 空间复杂度: O(1) 
 * 申请的变量 hash 最大长度为 256，因为 Ascii 字符最多 256 种可能，因此，考虑为常量空 间，即 O(1)
 */