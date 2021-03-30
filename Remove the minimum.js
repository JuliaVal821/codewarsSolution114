https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

    function removeSmallest(numbers) {
        let min = Math.min(...numbers);
        let index = numbers.indexOf(min);
        let arr = [];
        for(let i = 0; i < numbers.length; i++){
            if(i !== index){
                arr.push(numbers[i]);
            }
        }
        return arr;
    }