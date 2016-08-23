function p1to255(){
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
function p1to255odd(){
    for (var i = 1; i < 256; i += 2) {
        console.log(i);
    }
}
function p_int_sum_0to255(){
    var sum = 0;
    for (var i = 0; i < 256; i++) {
        sum += i;
        console.log("i = "+i+", sum = "+sum );
    }
}
function p_arr(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function arr_max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    console.log(max);
}
function arr_avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}
function odd_arr_0to255() {
    var arr = [];
    for (var i = 1; i < 256; i += 2) {
        arr.push(i);
    }
    return arr;
}
function sqr_arr_inplace(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2;
    }
    return arr;
}
function fnd_y_cnt(arr,y) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            cnt += 1;
        }
    }
    console.log(cnt);
}
function set_neg_to_zero(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i]=0;
        }
    }
    return arr;
}
function arr_max_min_mean(arr) {
    var sum = arr[0];
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    var mean = sum/arr.length;
    console.log("min = "+min);
    console.log("max = "+max);
    console.log("mean = "+mean);
}
function arr_shft_left(arr) {
    arr.splice(0,1);
    arr.push(0);
    return arr;
}
function neg_to_dojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    return arr;
}
function rmv_space_string(str) {
    var newstr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " "){
            newstr += str[i];
        }
    }
    return newstr;
}
function get_digits(str) {
    var numstr = '';
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 0 && str[i] <= 9 && str[i] != " "){
            numstr += str[i];
        }
    }
    num = numstr * 1;
    return num;
}
function push_front(arr, newelement) {
    for (var i = arr.length - 1; i > -1; i--) {
        arr[i+1] = arr[i];
    }
    arr[0]=newelement;
    return arr;
}
function pop_front(arr) {
    var output = arr[0];
    var temparr =[];
    for ( var i = 1; i < arr.length; i++) {
        temparr[i-1]=arr[i];
    }
    arr = temparr;
    console.log(arr);
    return output;
}
function pop_front_rt_wy(arr) {
    var output = arr[0];
    for ( var i = 1; i < arr.length; i++) {
        arr[i-1]=arr[i];
    }
    delete arr[arr.length-1];
    console.log(arr);
    return output;
}
function rotate(arr,shft) {
    var temparr = [];
    for (var i = 0; i < shft; i++) {
        temparr[i]=arr[arr.length - (shft - i)];
    }
    for (i = 0; i < (arr.length - shft); i++) {
        temparr[shft + i] = arr[i];
    }
    arr = temparr;
    return arr;
}
function rotate_rt_wy(arr,shft) {
    var temp = 0;
    for (var i = 0; i < shft; i++) {
        temp = arr[arr.length - 1];
        for (var j = (arr.length - 1); j > 0; --j) {
            arr[j] = arr[j-1];
        }
        arr[0]=temp;
    }
    return arr;
}
function filter_range(arr ,min, max) {
    var temparr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            temparr[j]=arr[i];
            j++;
        }
    }
    arr = temparr;
    return arr;
}
function filter_range_rt_wy(arr ,min, max) {
    for (var i = arr.length-1; i > -1; i--) {
        if (arr[i] >= min && arr[i] <= max) {
            for (var j = i; j < arr.length -1; j++) {
                arr[j]= arr[j+1];
            }
            arr.length = arr.length - 1;
        }
    }
    return arr;
}
function insert_at(arr, index, value) {
    for (var i = arr.length - 1; i >= index; i--) {
        arr[i+1] = arr[i];
    }
    arr[index]=value;
    return arr;
}
function remove_at(arr, index) {
    var output = arr[index];
    for ( var i = index + 1; i < arr.length; i++) {
        arr[i-1]=arr[i];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return output;
}
function swap_array_pairs(arr) {
    for (var i = 0; i < arr.length-1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
function remove_duplicates(arr) {
    for (var i = arr.length-1; i > -1; i--) {
        if (arr[i] == arr[i-1]) {
            for (var j = i; j < arr.length -1; j++) {
                arr[j]= arr[j+1];
            }
            arr.length = arr.length - 1;
        }
    }
    return arr;
}
function remove_neg_no_nested_loops(arr) {
    var j = 0;
    for (var i =0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    return arr;
}
function second_to_last(arr) {
    if (arr.length > 1) {
        return arr[arr.length - 2];
    }
    else {
        return null;
    }
}
function nth_to_last(arr, n) {
    if (arr.length > 1) {
        return arr[arr.length - n];
    }
    else {
        return null;
    }
}
function shuffle(arr) {
    var temp = 0;
    var rndtmp = 0;
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        rndtmp = Math.floor(Math.random()*arr.length);
        arr[i] = arr[rndtmp];
        arr[rndtmp] = temp;
    }
    return arr;
}
function remove_from_array(arr,minindx,maxindx) {
    var j = 0;
    for (var i =0; i < arr.length; i++) {
        if (i < minindx || i > maxindx) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    return arr;
}
function intermediate_sums(arr) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
        if ( count == 10 || i == arr.length-1) {
            for (var j = arr.length-1; j > i; j--) {
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            sum = 0;
            count = 0;
            i++
        }
    }
    return arr;
}
function double_trouble(arr) {
    var arrlen = arr.length;
    for (var i = arrlen - 1; i > -1; i--) {
        arr[2*i + 1] = arr[i];
        arr[2*i] = arr[i];
    }
    return arr;
}
function zip_it(arr, arr2) {
    var arrlen = arr.length;
    var arr2len = arr2.length;
    console.log(arrlen , arr2len);
    var j = 1;
    if (arr2len >= arrlen) {
        for ( var i = arrlen + arr2len - 1; i > 2*arrlen - 1; i--) {
            arr[i] = arr2[arr2len - j];
            j++;
        }
        var m = 0;
        for ( var k = arrlen*2 -1; k > -1; k -= 2) {
            console.log (k);
            arr[k] = arr2[arrlen - 1 - m];
            arr[k-1] = arr[arrlen - 1 - m];
            m++;
        }
    }
    if (arrlen > arr2len) {
        for ( var i = arrlen + arr2len - 1; i > 2*arr2len - 1; i--) {
            arr[i] = arr[arrlen - j];
            j++;
        }
        var m = 0;
        for ( var k = arr2len*2 -1; k > -1; k -= 2) {
            console.log (k);
            arr[k] = arr2[arr2len - 1 - m];
            arr[k-1] = arr[arr2len - 1 - m];
            m++;
        }
    }
    return arr;
}
