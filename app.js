// Assignments of Chapter 1
// Task 1
alert("Welcome User!");
// Task 2
alert("Error! Please enter a valid password.");
// Task 3
alert('Welcome to JS Land...\nHappy Coding!');
// Task 4
alert("Welcome to JS Land...");
alert("Happy Coding!");
// Task 5
console.log("Hello... I can run JS through my web browser's console");

// Assignments of Chapter 2
// Task 1
var username;
// Task 2
var myName = "Syed Talha Askari"; 
// Task 3
var message = "Chapter 2";
alert(message);
// Task 4
var name = "Syed Talha Askari";
var age = 23;
var course = "Web & Mobile App"
alert(name);
alert(age + " years old");
alert(course);
// Task 5
var msg = " PIZZA\n PIZZ\n PIZ\n PI\n P\n";
alert(msg);
// Task 6
var email = "syedtalhaaskari@gmail.com";
alert("My email address is " + email);
// Task 7
var book = "A smarter way to learn JavaScript";
alert("I'm trying to learn " + book);
// Task 8
document.write("Yah! I can write HTML content through JavaScript");
// Task 9
var show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(show);
document.write(show);

// Assignments of Chapter 3
// Task 1
var age = 23;
alert("I am " + age + " years old");
// Task 2
var count = 4;
alert("You have visited this site " + count + " times");
// Task 3
var birthYear = 1997;
var msg = "My birth year is " + birthYear + "<br>" + "Data type of my ddeclared variable is number";
document.write(msg);
// Task 4
var visitor_name = "John Doe";
var product_title = "T-shirt";
var product_quantity = 5;
document.write("<strong>" + visitor_name + "</strong> ordered <strong>" + product_quantity + "</strong> <strong>" + product_title + "</strong>(s) on XYZ Clothing store");

// Assignments of Chapter 4
// Task 1
var a, b, c;
// Task 2
var $hello, Hello, hello_world, hello1, _hello; // Legal
var 1hello, %hello, hello-world, hello world, hello%world; // Illegal
// Task 3
var heading = "<h1>Rules for naming JS variables</h1><br><br>";
document.write(heading);
document.write("Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable<br>");
document.write("Variable must begin with a letter, $ or _ . For example : $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>");

// Assignments of Chapter 5
// Task 1
var num1 = 3;
var num2 = 5;
total = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + total + "<br>");
// Task 2
Subtraction
var num1 = 3;
var num2 = 5;
total = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + total + "<br>");
// Multiplication
var num1 = 3;
var num2 = 5;
total = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + total + "<br>");
// Division
var num1 = 3;
var num2 = 5;
total = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + total + "<br>");
// Modulus
var num1 = 3;
var num2 = 5;
total = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + total + "<br>");
// Task 3
var variable;
document.write("Value after variable declaration is " + variable + "<br>");
variable = "5";
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
variable %= 3;
document.write("The remainder is: " + variable + "<br>");
// Task 4
var price = 600;
var quantity = 5;
var total = price * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + total + "PKR");
// Task 5
var table = 4;
document.write("Table of " + table + "<br/>");
document.write(table + "x1=" + table*1 + "<br/>");
document.write(table + "x2=" + table*2 + "<br/>");
document.write(table + "x3=" + table*3 + "<br/>");
document.write(table + "x4=" + table*4 + "<br/>");
document.write(table + "x5=" + table*5 + "<br/>");
document.write(table + "x6=" + table*6 + "<br/>");
document.write(table + "x7=" + table*7 + "<br/>");
document.write(table + "x8=" + table*8 + "<br/>");
document.write(table + "x9=" + table*9 + "<br/>");
document.write(table + "x10=" + table*10 + "<br/>");
// Task 6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "&deg;C is " + fahrenheit + "&deg;F<br>");
fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "&deg;F is " + celsius + "&deg;C<br>");
// Task 7
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping = 100;
var total = price1 * quantity1 + price2 * quantity2 + shipping;
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + quantity2 + "<br>");
document.write("Shipping Charges " + shipping + "<br><br>");
document.write("Total cost of your order is " + total);
// Task 8
var total_marks = 980;
var marks_obtained = 804;
var percentage = marks_obtained * 100 / total_marks;
document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
// Task 9
var dollar = 10;
var riyal = 25;
var dollar_to_pkr = 104.80;
var riyal_to_pkr = 28;
var pkr = dollar * dollar_to_pkr + riyal * riyal_to_pkr;
document.write("<h1>Currency in PKR</h1><br><br>");
document.write("Total Currency in PKR: " + pkr);
// Task 10
var num = 5;
document.write("Number: " + num + "<br>");
num = ((num + 5) * 10) / 2;
document.write("After Calculation: " + num);
// Task 11
var current_year = 2020;
var birth_year = 1997;
var age = current_year - birth_year;
document.write("<h1>Age Calculator</h1><br><br>");
document.write("Current Year: " + current_year + "<br>");
document.write("Birth Year: " + birth_year + "<br>");
document.write("Your Age is: " + age + "<br>");
document.write("They are either " + age + " or " + (age-1) + " years old" + "<br>");
// Task 12
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("<h1>The Geometrizer</h1><br><br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");
// Task 13
var snack = "chocolate chip";
var current_age = 15;
var maximum_age = 65;
var snacks_per_day = 3;
var total = (maximum_age - current_age) * snacks_per_day;
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + current_age + "<br>");
document.write("Estimated Maximum Age: " + maximum_age + "<br>");
document.write("Amount of snacks per day: " + snacks_per_day + "<br>");
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maximum_age + "<br>");

// Assignments of Chapters 6-9
// Task 1
var num = 10;
document.write("Result:<br>");
document.write("The value of a is: " + num + "<br>");
document.write("............................................<br><br>");
document.write("The value of ++a is: " + ++num + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");
document.write("The value of a++ is: " + num++ + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");
document.write("The value of --a is: " + --num + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");
document.write("The value of a-- is: " + num-- + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");
// Task 2
var a = 2, b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
// At --a a first incremented and then it shows
// At --a - --b a and b first decremented and then they subtracted
// At --a - --b + ++b b first incremented and then it added with the above answer
// At --a - --b + ++b + b-- b first added with the above answer and then b was decremented
document.write("result is " + result + "<br>");
// Task 3
var name = prompt("Type your name: ");
document.write("Welcome " + name + "<br>");
// Task 4
// Missing from assignment's file
// Task 5
var table = (+prompt("Enter Number: ", 5));
document.write("Table of " + table + "<br/>");
document.write(table + "x1=" + table*1 + "<br/>");
document.write(table + "x2=" + table*2 + "<br/>");
document.write(table + "x3=" + table*3 + "<br/>");
document.write(table + "x4=" + table*4 + "<br/>");
document.write(table + "x5=" + table*5 + "<br/>");
document.write(table + "x6=" + table*6 + "<br/>");
document.write(table + "x7=" + table*7 + "<br/>");
document.write(table + "x8=" + table*8 + "<br/>");
document.write(table + "x9=" + table*9 + "<br/>");
document.write(table + "x10=" + table*10 + "<br/>");
// Task 6
var subject1 = prompt("Name of Subject 1: ");
var subject2 = prompt("Name of Subject 2: ");
var subject3 = prompt("Name of Subject 3: ");
var total_marks = 100;
var full_marks = total_marks * 3;
var obtained_marks1 = (+prompt("Marks of Subject 1: "));
var obtained_marks2 = (+prompt("Marks of Subject 2: "));
var obtained_marks3 = (+prompt("Marks of Subject 3: "));
var total_obtained_marks = obtained_marks1 + obtained_marks2 + obtained_marks3;
var percentage1 = obtained_marks1 * 100 / total_marks;
var percentage2 = obtained_marks2 * 100 / total_marks;
var percentage3 = obtained_marks3 * 100 / total_marks;
var percentage = total_obtained_marks * 100 / full_marks;
document.write("<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></thead><tbody><tr><td>" + subject1 + "</td><td>" + total_marks + "</td><td>" + obtained_marks1 + "</td><td>" + percentage1 + "%</td></tr><tr><td>" + subject2 + "</td><td>" + total_marks + "</td><td>" + obtained_marks2 + "</td><td>" + percentage2 + "%</td></tr><tr><td>" + subject3 + "</td><td>" + total_marks + "</td><td>" + obtained_marks3 + "</td><td>" + percentage3 + "%</td></tr><tfoot><th></th><th>" + full_marks + "</th><th>" + total_obtained_marks + "</th><th>" + percentage + "%</th></tfoot></table>");
// Task 7
// Missing from assignment's file

// Assignments of Chapter 12-13
// Task 1
var chr = prompt("Enter Character: ");
if(chr.charAt(0) >= 0 && chr.charAt(0) <= 9) 
{
    document.write("Given Character is in Numeric<br>");
}
else if(chr.charAt(0) >= 'A' && chr.charAt(0) <= 'Z')
{
    document.write("Given Character is in Uppercase<br>");
}
else if(chr.charAt(0) >= 'a' && chr.charAt(0) <= 'z')
{
    document.write("Given Character is in Lowercase<br>");
}
else {
    document.write("Unknown Character<br>");
}
// Task 2
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
if(num1 > num2)
{
    document.write(num1 + " is greater than " + num2 + "<br>");
}
else if(num1 < num2)
{
    document.write(num1 + " is less than " + num2 + "<br>");
}
else
{
    document.write(num1 + " is equal to " + num2 + "<br>");
}
// Task 3
var num = +prompt("Enter Number:");
if (num > 0)
{
    document.write(num + " is a positive number<br>");
}
else if (num < 0)
{
    document.write(num + " is a negative number<br>");
}
else if (num === 0)
{
    document.write(num + " is equal to zero<br>");
}
// Task 4
var vowel = prompt("Enter Character: ");
if (vowel.charAt(0).toLowerCase() === 'a' || vowel.charAt(0).toLowerCase() === 'e' || vowel.charAt(0).toLowerCase() === 'i' || vowel.charAt(0).toLowerCase() === 'o' || vowel.charAt(0).toLowerCase() === 'u')
{
    document.write("Given Character " + vowel.charAt(0) + " is a vowel<br>");
}
else
{
    document.write("Given Character " + vowel.charAt(0) + " is not a vowel<br>");
}
// Task 5
var pass = "me nhi bataunga";
var user_pass = prompt("Enter Password: ");
if (user_pass === "")
{
    document.write("Please enter your password<br>");
}
else if (user_pass === pass)
{
    document.write("Correct!<br>");
}
else
{
    document.write("Incorrect password<br>");
}
// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting + "<br>");
}
else
{
    greeting = "Good evening";
    document.write(greeting + "<br>");
}
// Task 7
var time = prompt("Enter time in 24 hour format HHMM: ");
if (time >= 0000 && time < 1200)
{
    document.write("Good morning!<br>");
}
else if (time >= 1200 && time < 1700)
{
    document.write("Good afternoon!<br>");
}
else if (time >= 1700 && time < 2100)
{
    document.write("Good evening!<br>");
}
else if (time >= 2100 && time <= 2359)
{
    document.write("Good night!<br>");
}

// Assignments of Chapter 14-16
// Task 1
var student_names = [];
// Task 2
var student_names = new Array();
// Task 3
var str = ["a", "q", "b"];
// Task 4
var num = [1, 2, 3, 4];
// Task 5
var bool = [true, false, false, true];
// Task 6
var mixed_array = ["a", 1, true];
// Task 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications:<br><br>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");
// Task 8
var student_names = ["Michael", "John", "Tony"];
var student_scores = [320, 230, 480];
var total_marks = 500;
var percentages = [student_scores[0] * 100 / total_marks, student_scores[1] * 100 / total_marks, student_scores[2] * 100 / total_marks];
document.write("Score of " + student_names[0] + " is " + student_scores[0] + ". Percentage: " + percentages[0] + "%<br>");
document.write("Score of " + student_names[1] + " is " + student_scores[1] + ". Percentage: " + percentages[1] + "%<br>");
document.write("Score of " + student_names[2] + " is " + student_scores[2] + ". Percentage: " + percentages[2] + "%<br>");
// Task 9
var colors = ["red", "green", "blue"];
document.write(colors + "<br>");
var add_color = prompt("Which color to add in the beginning: ");
colors.unshift(add_color);
document.write(colors + "<br>");
add_color = prompt("Which color to add in the end: ");
colors.push(add_color);
document.write(colors + "<br>");
colors.unshift("yellow", "white");
document.write(colors + "<br>");
colors.shift();
document.write(colors + "<br>");
colors.pop();
document.write(colors + "<br>");
var color_index = prompt("On which index you want to add a color: ");
add_color = prompt("Which color you want to add: ");
colors.splice(color_index, 0, add_color);
document.write(colors + "<br>");
color_index = prompt("From which index you want to delete color(s): ");
var color_quantity = prompt("How many color(s) you wanna add: ");
colors.splice(color_index, color_quantity);
document.write(colors + "<br>");
// Task 10
var student_scores = [320, 230, 480, 120];
document.write("Scores of Students : " + student_scores + "<br>");
student_scores.sort();
document.write("Ordered Scored of Students : " + student_scores + "<br>");
// Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [cities[2], cities[3]];
document.write("Cities list:<br>" + cities + "<br><br>");
document.write("Selected cities list:<br>" + selectedCities + "<br>");
// Task 12
var arr = ["This ", " is ", " my ", " cat"];
document.write("Array:<br>" + arr + "<br><br>");
document.write("String:<br>" + arr.join("") + "<br>");
// Task 13
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>" + devices + "<br><br>");
var shift = devices.shift();
document.write("Out:<br>" + shift + "<br>");
shift = devices.shift();
document.write("Out:<br>" + shift + "<br>");
shift = devices.shift();
document.write("Out:<br>" + shift + "<br>");
shift = devices.shift();
document.write("Out:<br>" + shift + "<br>");
// Task 14
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>" + devices + "<br><br>");
var pop = devices.pop();
document.write("Out:<br>" + pop + "<br>");
pop = devices.pop();
document.write("Out:<br>" + pop + "<br>");
pop = devices.pop();
document.write("Out:<br>" + pop + "<br>");
pop = devices.pop();
document.write("Out:<br>" + pop + "<br>");
// Task 15
var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var drop_down = "<select><option>" + phone_manufacturers[0] + "</option><option>" + phone_manufacturers[1] + "</option><option>" + phone_manufacturers[2] + "</option><option>" + phone_manufacturers[3] + "</option><option>" + phone_manufacturers[4] + "</option><option>" + phone_manufacturers[5] + "</option></select>";
document.write(drop_down);

// Assignments of Chapters 17-20
// Task 1
var multi_array = [[1, 2, 3], ["a", "b"] , "c"];
// Task 2
var multi_array2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// Task 3
for (var i = 1; i <= 10; i++)
{
    document.write(i + "<br>");
}
// Task 4
var table_number = +prompt("Enter a number to show its multiplication table");
var table_length = +prompt("Enter length multiplication table");
document.write("Multiplication table of " + table_number + "<br>");
document.write("Length " + table_length + "<br><br>");
for(var i = 1; i <= table_length; i++)
{
    document.write(table_number + " x " + i + " = " + table_number*i + "<br>");
}
// Task 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++)
{
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < fruits.length; i++)
{
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
// Task 6
document.write("<b>Counting:</b><br><br>");
for(var i = 1; i < 16; i++)
{
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("<b>Reverse counting:</b><br><br>");
for(var i = 10; i > 0; i--)
{
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("<b>Even:</b><br><br>");
for(var i = 0; i < 21; i+=2)
{
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("<b>Odd:</b><br><br>");
for(var i = 1; i < 20; i+=2)
{
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("<b>Series:</b><br><br>");
for(var i = 2; i < 21; i+=2)
{
    document.write(i + "k, ");
}
document.write("<br><br>");
// Task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (var i = 0; i < A.length; i++)
{
    if (A[i] === search)
    {
        document.write(search + " is <b>available</b> at index " + i + " in our bakery<br>");
        flag = 0;
        break;
    }
    else if (i === A.length - 1)
    {
        document.write("We are sorry. pastry is <b>not available</b> in our bakery<br>");
    }
}
// Task 8
var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
A.sort();
document.write("The largest number is " + A[A.length - 1] + "<br>");
// Task 9
var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
A.sort();
document.write("The smallest number is " + A[0] + "<br>");
// Task 10
for(var i = 5; i < 101; i += 5)
{
    document.write(i + ", ");
}
document.write("<br>");