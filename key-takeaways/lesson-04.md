# Lesson 04: JavaScript – Phạm vi biến, Cấu trúc điều khiển & Utils (String/Array)
## Phần I: Phạm vi biến (Scope)

**Scope** (phạm vi) xác định nơi có thể truy cập một biến. Bài này tập trung vào ba phạm vi: global, function và block.

### 1. Block scope (khối)

Block: là khối lệnh nằm trong cặp ngoặc nhọn `{}`, vd: `if` hoặc `for`.

- **`var`**: không có block scope; vẫn bị giới hạn bởi hàm bao ngoài nếu được khai báo trong hàm.
- **`let` / `const`**: chỉ truy cập được trong block khai báo và các phạm vi con bên trong. Ra ngoại bị undefine.   

### 2. Function scope (hàm)

- Biến được khai báo trong một hàm không thể truy cập trực tiếp từ bên ngoài hàm đó.
- `var`,`let` và `const` ra ngoài hàm đều bị undefine.

### 3. Global scope (toàn cục)

- Trong script thông thường, biến được khai báo ngoài hàm và ngoài block thuộc global scope.
- Có thể truy cập từ các hàm hoặc block bên trong, nếu không bị biến cùng tên che khuất.

## Phần II: Cấu trúc điều khiển (Control Flow)

### 1. break và continue

- **`break`**: thoát khỏi vòng lặp ngay lập tức. Nếu có vòng lặp lồng nhau, `break` thông thường chỉ thoát khỏi vòng lặp gần nhất chứa nó.
- **`continue`**: bỏ qua phần code còn lại của lần lặp hiện tại và chuyển sang lần lặp tiếp theo.


### 2. Câu điều kiện if...else

Thực thi nhánh `if` khi điều kiện đúng; thực thi nhánh `else` khi điều kiện sai.

### 3. Câu điều kiện if...else if...else

Kiểm tra nhiều điều kiện theo thứ tự. Chỉ thực thi nhánh đầu tiên có điều kiện đúng. Nếu không có điều kiện nào đúng, thực thi nhánh `else` (nếu có).

### 4. Ternary operator (toán tử điều kiện)

Cách viết ngắn gọn cho `if...else` đơn giản khi cần chọn một trong hai giá trị.

Cú pháp: `condition ? valueIfTrue : valueIfFalse`.

### 5. Vòng lặp for...in

Dùng để duyệt tên thuộc tính (key) có thể liệt kê của một object, bao gồm cả thuộc tính kế thừa. Mỗi lượt nhận một key, không phải giá trị của thuộc tính.

### 6. forEach method

Method của Array, gọi một function cho mỗi phần tử có trong mảng.

Không thể dùng `break` hoặc `continue` để điều khiển các lượt của `forEach`.

## Phần III: Utils

**Utils** (tiện ích) là các hàm hỗ trợ giúp viết code nhanh và gọn hơn. Trong bài này, ta sử dụng các method có sẵn của JS:

- **String utils**: các method xử lý chuỗi.
- **Array utils**: các method xử lý mảng.

### 1. String utils

- **`trim()`**: bỏ khoảng trắng ở hai đầu chuỗi, không bỏ khoảng trắng ở giữa.
- **`trimStart()`**: bỏ khoảng trắng ở đầu chuỗi (bên trái).
- **`trimEnd()`**: bỏ khoảng trắng ở cuối chuỗi (bên phải).
- **`toUpperCase()`**: chuyển chuỗi sang chữ hoa.
- **`toLowerCase()`**: chuyển chuỗi sang chữ thường.
- **`includes(substring)`**: kiểm tra chuỗi có chứa chuỗi con hay không, trả về `true` hoặc `false`; có phân biệt chữ hoa và chữ thường.
- **`split(separator)`**: tách chuỗi theo dấu phân cách, trả về một mảng các chuỗi con.
- **`replace(searchValue, replaceValue)`**: thay chuỗi con bằng chuỗi khác. Khi `searchValue` là một chuỗi, chỉ thay lần xuất hiện đầu tiên.

### 2. Array utils

### Thêm phần tử vào mảng

- **`push(element)`**: thêm phần tử vào cuối mảng.
- **`unshift(element)`**: thêm phần tử vào đầu mảng.
- **`splice(index, 0, element)`**: thêm phần tử tại vị trí `index`; số `0` nghĩa là không xóa phần tử nào.

### Xóa phần tử khỏi mảng

- **`pop()`**: xóa và trả về phần tử cuối mảng.
- **`shift()`**: xóa và trả về phần tử đầu mảng.
- **`splice(index, deleteCount)`**: xóa `deleteCount` phần tử kể từ vị trí `index`.

**Lưu ý:** `splice(index, deleteCount, element)` có thể vừa xóa vừa thêm phần tử tại cùng vị trí.

### Tìm kiếm phần tử

- **`find()`**: trả về phần tử đầu tiên thỏa điều kiện; nếu không tìm thấy thì trả về `undefined`.
- **`filter()`**: trả về mảng mới chứa tất cả phần tử thỏa điều kiện; nếu không tìm thấy thì trả về mảng rỗng `[]`.

Cả hai method nhận một function dùng để kiểm tra điều kiện cho từng phần tử.

### Biến đổi mảng

- **`map()`**: tạo mảng mới bằng cách áp dụng một function lên từng phần tử của mảng gốc. Mỗi giá trị function trả về trở thành phần tử tương ứng trong mảng mới. Mảng mới có cùng độ dài với mảng gốc.

### Sắp xếp mảng

**`sort((a, b) => a - b)`**: sắp xếp mảng số theo thứ tự tăng dần.

Function so sánh nhận hai phần tử `a` và `b`:

- Trả về số âm: `a` đứng trước `b`.
- Trả về số dương: `b` đứng trước `a`.
- Trả về `0`: giữ nguyên thứ tự tương đối của `a` và `b`.

**Lưu ý:** `push`, `unshift`, `pop`, `shift`, `splice` và `sort` thay đổi trực tiếp mảng gốc. `filter` và `map` tạo mảng mới.
