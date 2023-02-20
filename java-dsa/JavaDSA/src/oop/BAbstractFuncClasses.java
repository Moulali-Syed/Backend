package oop;
/*
I want to create - Car Bicycle Boat

then i realized all are used for travel 

so i kept common functionalities in Vehicle class,
sometimes i want functionalities that the Vehicle class cannot answer
but only the inheriting class can do that , and i want to force
the inheriting class to define that functionality
say i want - a function isMotorized() - this cannot be answered by Vehicle
it can only be answered by Car , Boat, Bicycle

now vehicle class should force its sub class to define this functionality
here comes to our rescue , abstract functions and abstract class
-------------------
abstract method:
just declare it , donot give any body

public abstract boolean isMotorized();

if we have atleast one method as abstract , we should mark our class as also
abstract , because we must tell class that some of the functionalities in it
are not defined

so mark class as abstract as well

as class has some incomplete functionalities which can be defined only by its sub class
we cannot create an object for abstract class(because it is incomplete class)

Thus which ever class inherits the abstract class
it should either provide a definition for abstract methods , or mark
itself(class) as abstract , thus we cannot create object of it as well

This way by using abstract methods , we force the inheriting class to implement this
method , if we donot mark abstract then the sub classes might not define this method
 */
public class BAbstractFuncClasses {

}
