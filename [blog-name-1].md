public:

public can be accessed from inside the class.

Example:


class Students{
public name="Welcome";
}
const student =new Students();
console.log(student.name);


private:

It can only accessed inside the class.


Example:

class Students{
private name="Welcome";
showstudent(){
    return this.name
}
}

protected:

It is similar to private but child class can access it.

Example:

class Students{
protected name="Welcome";
}
class person extends Students{
showstudent(){
    return this.name
}
}



readonly:

It can be assigned when it is declared but can not change later.

Example:

class Students{
protected name="Welcome";
}
class person extends Students{
showstudent(){
    return this.name
}
}
class User{
    readonly id=123
}
