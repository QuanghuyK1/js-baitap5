// // Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
// let input = prompt('nhap chuoi: ');
// function check(input){
//     if(input.startsWith('java') == true){
//         console.log('true');
//     }else console.log('false');
// }
// check(input);
// // Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
// //   - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
// //   - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
// //   Example: 
// //   [1, -10, 5, 18, -9, 5] => 27
// function findMaxDiff(arr){
//     if(arr.length < 2){
//         return 0;
//     }else{
//         let max = 0;
//         for(let i = 0;i< arr.length;i++){
//             if(max < Math.abs(arr[i] - arr[i-1])){
//                 max = Math.abs(arr[i] - arr[i-1]);
//             }
//         }   
//         return max;
//     }
// }
// // console.log(findMaxDiff([1, -10, 5, 18, -9, 5]))
// // viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// // Tham số:
// // - array: mảng gốc
// // - n: số phần tử trả về
// function first (arr, n){
//     if(n<=0){
//         return [];
//     }else if(n>=arr.length){
//         return arr;
//     }else{
//         let arr1 =[];
//         for(let i = 0;i<n;i++){
//             arr1[i]=arr[i];
//         }
//         return arr1;
//     }
// }
// console.log(first([1, -10, 5, 18, -9, 5],3))
// // Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
// //  Nếu có 1 số âm và một số dương thì trả về true. 
// // Các trường hợp khác trả về false. 
// // Số 0 là số không âm cũng không dương
// // Tham số:
// //             - number1: số nguyên thứ nhất
// // - number2: số nguyên thứ hai
// function checkInt(num1, num2){
//     if(num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0){
//         return true;
//     }else return false;
// }
// let num1 = Number(prompt('nhap so 1:'));
// let num2 = Number(prompt('nhap so 2:'));
// if(checkInt(num1,num2)){
//     console.log('true');
// }else console.log('false');
// // Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu số đó và 13, 
// // nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
// // Example: 
// // n = 20 // return 14
// // n = 5 // return 8
// function Tinhtoan(n){
//     if(n>13){
//         return Math.abs(n-13)*2;
//     }else{
//         return Math.abs(n-13);
//     }
// }
// let n = Number(prompt('nhap so n:'));
// console.log(Tinhtoan(n));
// Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

// Input: là một dãy số.
// Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

// Ví dụ:

// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)
function Max(a){
    max = Math.abs(a[0]-a[1]);
    for(i = 0 ; i<a.length-1; i++){
        for(j=i+1;j<a.length;j++){
            hieu = Math.abs(a[i]-a[j]);
            if(hieu > max ){
                max = hieu;
            }
        }
    }
    return max;
}
console.log(Max([1, 2, 3, 8, 9]))
