/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    if(nums1.length==0 || nums2.length==0){
        return []
    }
    let obj1= {}
    for(let i=0; i< nums1.length; i++){
        if(nums1[i] in obj1){
            obj1[nums1[i]] +=1
        }
        else{
                    obj1[nums1[i]] = 1            
        }
    }
    let obj2= {}
    for(let i=0; i< nums2.length; i++){
        if(nums2[i] in obj2){
            obj2[nums2[i]] +=1
        }
        else{
                    obj2[nums2[i]] = 1            
        }
    }
let arr=[]
    for(let j in obj1){
        if(j in obj2 ){
            let count = obj2[j]> obj1[j] ?  obj1[j]:  obj2[j]
            for(let k = 1; k<=count; k++){
                arr.push(j)
            }
        }
    }
    return arr

};
// @lc code=end

