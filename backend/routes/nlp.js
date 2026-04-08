function nlpToCode(input) {
  const text = input.toLowerCase().trim();

  // ── PYTHON ──
  if (text.includes('hello world') && text.includes('python'))
    return { language: 'Python', code: `print("Hello, World!")` };
  if ((text.includes('for loop') || text.includes('loop')) && text.includes('python'))
    return { language: 'Python', code: `for i in range(10):\n    print(i)` };
  if (text.includes('fibonacci') && text.includes('python'))
    return { language: 'Python', code: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=' ')\n        a, b = b, a + b\n\nfibonacci(10)` };
  if (text.includes('function') && text.includes('python'))
    return { language: 'Python', code: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))` };
  if (text.includes('class') && text.includes('python'))
    return { language: 'Python', code: `class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} makes a sound"\n\ndog = Animal("Dog")\nprint(dog.speak())` };
  if (text.includes('list') && text.includes('python'))
    return { language: 'Python', code: `my_list = [1, 2, 3, 4, 5]\nfor item in my_list:\n    print(item)` };

  // ── JAVASCRIPT ──
  if (text.includes('hello world') && text.includes('javascript'))
    return { language: 'JavaScript', code: `console.log("Hello, World!");` };
  if ((text.includes('for loop') || text.includes('loop')) && text.includes('javascript'))
    return { language: 'JavaScript', code: `for (let i = 0; i < 10; i++) {\n  console.log(i);\n}` };
  if (text.includes('arrow function') && text.includes('javascript'))
    return { language: 'JavaScript', code: `const greet = (name) => {\n  return \`Hello, \${name}!\`;\n};\n\nconsole.log(greet("World"));` };
  if (text.includes('function') && text.includes('javascript'))
    return { language: 'JavaScript', code: `function greet(name) {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet("World"));` };
  if (text.includes('array') && text.includes('javascript'))
    return { language: 'JavaScript', code: `const arr = [1, 2, 3, 4, 5];\narr.forEach(item => console.log(item));` };
  if (text.includes('promise') && text.includes('javascript'))
    return { language: 'JavaScript', code: `const fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => resolve("Data loaded!"), 1000);\n  });\n};\n\nfetchData().then(data => console.log(data));` };

  // ── SQL ──
  if (text.includes('select') || text.includes('sql') || text.includes('database query'))
    return { language: 'SQL', code: `SELECT * FROM users\nWHERE active = 1\nORDER BY created_at DESC\nLIMIT 10;` };
  if (text.includes('create table'))
    return { language: 'SQL', code: `CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(150) UNIQUE,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);` };
  if (text.includes('insert'))
    return { language: 'SQL', code: `INSERT INTO users (name, email)\nVALUES ('John Doe', 'john@example.com');` };
  if (text.includes('join'))
    return { language: 'SQL', code: `SELECT u.name, o.product\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE u.active = 1;` };
  if (text.includes('update'))
    return { language: 'SQL', code: `UPDATE users\nSET email = 'newemail@example.com'\nWHERE id = 1;` };
  if (text.includes('delete'))
    return { language: 'SQL', code: `DELETE FROM users\nWHERE id = 1;` };

  // ── C ──
  if (text.includes('hello world') && (text.includes(' c') || text.includes('c ')))
    return { language: 'C', code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}` };
  if (text.includes('for loop') && text.includes('c'))
    return { language: 'C', code: `#include <stdio.h>\n\nint main() {\n    for (int i = 0; i < 10; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}` };
  if (text.includes('function') && text.includes('c'))
    return { language: 'C', code: `#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    printf("Sum: %d\\n", add(5, 3));\n    return 0;\n}` };
  if (text.includes('array') && text.includes('c'))
    return { language: 'C', code: `#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5; i++) {\n        printf("%d\\n", arr[i]);\n    }\n    return 0;\n}` };
  if (text.includes('pointer') && text.includes('c'))
    return { language: 'C', code: `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    printf("Value: %d\\n", *ptr);\n    printf("Address: %p\\n", ptr);\n    return 0;\n}` };

  // ── JAVA ──
  if (text.includes('hello world') && text.includes('java'))
    return { language: 'Java', code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}` };
  if (text.includes('for loop') && text.includes('java'))
    return { language: 'Java', code: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 10; i++) {\n            System.out.println(i);\n        }\n    }\n}` };
  if (text.includes('class') && text.includes('java'))
    return { language: 'Java', code: `public class Animal {\n    String name;\n\n    Animal(String name) {\n        this.name = name;\n    }\n\n    void speak() {\n        System.out.println(name + " makes a sound");\n    }\n\n    public static void main(String[] args) {\n        Animal dog = new Animal("Dog");\n        dog.speak();\n    }\n}` };
  if (text.includes('array') && text.includes('java'))
    return { language: 'Java', code: `public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int num : arr) {\n            System.out.println(num);\n        }\n    }\n}` };
  if (text.includes('method') && text.includes('java'))
    return { language: 'Java', code: `public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Sum: " + add(5, 3));\n    }\n}` };

  // Default
  return {
    language: 'Python',
    code: `# Prompt: "${input}"\n# Here is a basic Python template:\n\ndef main():\n    print("Hello from NLP Code Generator!")\n\nmain()`
  };
}