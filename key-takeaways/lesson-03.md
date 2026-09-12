# Lesson 03: GIT VÀ JAVASCRIPT

# GIT

## 1. Git Status

Dùng để kiểm tra trạng thái hiện tại của các file.

```git status```

Có thể kiểm tra file đang:
- ở Working Directory
- đã vào Staging Area
- có thay đổi chưa được commit

## 2. Staging Area -> Working Directory

Sau khi dùng:

```git add <file_name>```

File sẽ được đưa từ: Working Directory -> Staging Area

Nếu muốn đưa file từ Staging Area quay lại Working Directory:

```git restore --staged <file_name>```

Nếu muốn đưa tất cả file đang staging quay lại:

```git restore --staged .```

**Lưu ý:** Nội dung đã sửa trong file vẫn còn nguyên.
Chỉ bỏ file ra khỏi Staging Area.


## 3. Repository -> Working Directory

Lúc này thay đổi đã được commit.

Nếu muốn bỏ commit gần nhất và đưa thay đổi trở lại Working Directory:

```git reset HEAD~<số commit>```

## 4. Repository -> Staging Area
Nếu muốn bỏ commit gần nhất nhưng vẫn giữ nguyên thay đổi ở Staging Area (không cần `git add` lại):

```git reset --soft HEAD~<số commit>```

# Branch

Branch là nhánh dùng để làm code riêng mà chưa ảnh hưởng trực tiếp đến nhánh chính.
## 1. Xem danh sách branch

```git branch```

Dấu * cho biết mình đang đứng ở branch nào.
```text
*main
branch
```
## 2. Tạo branch

```git branch <branch_name>```

## 3. Chuyển sang branch

```git switch <branch_name>```

## 4. Tạo branch và chuyển sang luôn

```git switch -c <branch_name>```

## 5. Xóa branch

Không được đứng ngay branch mình muốn xóa.
Sau đó:

```git branch -D <branch_name muốn xóa>```

**Lưu ý:**  LUÔN LUÔN pull code trước khi tạo branch mới.

# gitignore

.gitignore dùng để khai báo những file hoặc folder mà Git không cần theo dõi.

# JAVASCRIPT

## 1. Convention

Convention là quy ước viết code, giúp code dễ đọc và thống nhất giữa các thành viên trong nhóm.

Một số convention phổ biến và cách dùng:

- **snake_case**: tạm thời không dùng.
- **kebab-case**: đặt tên file và folder.
- **camelCase**: đặt tên biến, hàm.
- **PascalCase**: đặt tên class.

## 2. console.log

`console.log()`: dùng để in dữ liệu ra console, giúp debug và theo dõi code khi chạy.

Cú pháp: `console.log(value);`

## 3. Object

Object (đối tượng): là một kiểu dữ liệu quan trọng trong JS, dùng để lưu tập hợp dữ liệu theo các cặp **key: value**.

Có thể gán object cho biến khai báo bằng `let` hoặc `const`.

Cú pháp chung:

```js
const objectName = {
  key: value
};
```

- **key**: tên thuộc tính, có thể đặt giống quy tắc tên biến.
- **value**: giá trị của thuộc tính đó, đặt giống quy tắc tên biến hoặc 1 object khác.

## 4. Logical operators

Các toán tử logic khi dùng với giá trị Boolean (`true`, `false`):

- **`&&` (AND - và)**: kết quả là `true` khi cả hai bên đều là `true`.
- **`||` (OR - hoặc)**: kết quả là `true` khi ít nhất một bên là `true`.
- **`!` (NOT - phủ định)**: đảo `true` thành `false` và ngược lại.

## 5. Array

Array (mảng): dùng để lưu tập hợp các phần tử theo thứ tự.

- **Độ dài mảng**: dùng `arrayName.length`.
- **Truy xuất phần tử**: dùng `arrayName[index]`.
- **Index** (chỉ số) bắt đầu từ `0`.
- Khi mảng có phần tử, index của phần tử cuối là `arrayName.length - 1`.

## 6. Function

Function (hàm): là đoạn code có thể tái sử dụng, thực hiện một nhiệm vụ hoặc một tính toán cụ thể.

Cú pháp khai báo hàm có tên:

```js
function functionName(parameter) {
  // Code xử lý
}
```

- **Parameter** (tham số): biến nhận giá trị đầu vào khi gọi hàm; hàm có thể có hoặc không có tham số.
- **Gọi hàm**: `functionName(argument);` — `argument` là giá trị thực tế truyền vào tham số.
- **Return value**: giá trị hàm trả `return giaTri;`. Lệnh `return` cũng kết thúc lần chạy hàm đó.
- Hàm thông thường không có `return`, hoặc dùng `return;` không kèm giá trị, sẽ trả về `undefined`.
