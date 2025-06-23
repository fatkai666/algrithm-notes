# 选择排序 i ~ n - 1 找到最小值，与i位置交换
def select_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            min_index = j if arr[j] < arr[min_index] else min_index
        arr[i], arr[min_index] = arr[min_index], arr[i]

# 冒泡排序, end = n - 1, 0 ~ end 找寻最大的，最大的移到end, end--
def bubble_sort(arr):
    end = len(arr) - 1
    for i in range(end):
        for j in range(end - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


# 插入排序 0 ～ i 范围有序， i + 1 插入到 0 ~ i 范围中排序后的位置
def insert_sort(arr):
    for i in range(1, len(arr)):
        for j in range(i - 1, -1, -1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
