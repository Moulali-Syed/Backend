package aSOLIDPrinciples;
/*
Single Responsibility Principle states that

There should never be more than one reason for a class to change 

this means our class have focused , single functionality 
addresses a specific concern

example:
Say i have created a class which sends and creates a data to a remote server

what are the reasons for this class to change?
There are multiple reasons for this to change
say communication protocol changes - http to https our class will change
message format changes JSON , suddenly server accepts only XML now, then class changes
Authentication is added, so our class needs to be changed

This is what we need to avoid 
we must have multiple classes to different works

Whenever designing a class take care that the class has only one specific concern 	
 */
public class ASingleResponsibilityPrinciple {

}
