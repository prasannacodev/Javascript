// Adding Prototype Methods:
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
Person.prototype.getFullName = function () {
  return this, this.firstname + "" + this.lastname;
};
let person = new Person("John", "Doe");
console.log(person.getFullName());


// Inheritance with Prototypes:
function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
  
      Person.prototype.getFullName = function() {
        return this.firstName + " " + this.lastName;
      };
  
      function Employee(firstName, lastName, position) {
        Person.call(this, firstName, lastName);
        this.position = position;
      }
  
      Employee.prototype = Object.create(Person.prototype);
      Employee.prototype.constructor = Employee;
  
      const employee = new Employee("John", "Doe", "Developer");
      console.log(employee.getFullName()); 
      console.log(employee.position);