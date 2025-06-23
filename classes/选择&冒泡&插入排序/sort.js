function swap(arr, i , j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

// 选择排序 i ~ n - 1 找到最小值，与i位置交换
function selectSort(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let minIndex = i;
        for (let j = i + i; j < arr.length; j ++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }
}

// 冒泡排序, end = n - 1, 0 ~ end 找寻最大的，最大的移到end, end--
function bubbleSort(arr) {
    let end = arr.length - 1;
    for (let i = 0; i < end; i ++) {
        for (let j = 0; j < end - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

// 插入排序 0 ～ i 范围有序， i + 1 插入到 0 ~ i 范围中排序后的位置
function insertSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j --) {
            swap(arr, j, j + 1);
        }
    }
}