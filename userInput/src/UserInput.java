import java.util.Scanner;

public class UserInput {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 int Number = 0; 
		 int prevNumber = 0;
		 int nextNumber = 1;
		 
		 
		 System.out.println("Enter the first number: ");
		 Scanner scanner = new Scanner(System.in);
	     
		 Number = scanner.nextInt();
		 System.out.print("Fibonacci Series of "+Number+" numbers: ");
		 
		 for (int i = 1; i <= Number; ++i)
	        {
	            System.out.print(prevNumber+" ");
	           
	      
	            int sum = prevNumber + nextNumber;
	            prevNumber = nextNumber;
	            nextNumber = sum;
	        }
		 
		 
		 
		 
//		 resource: https://www.youtube.com/watch?v=bZfUJ0ySdhk&t=9s
		 
		 Scanner scan = new Scanner(System.in);
		 int num = scan.nextInt();
		 int store = num;
		 int remainder = 0;
		 int sum = 0;
		 
		 while (num > 0) 
		 {
			 remainder = num%10;
			 sum = sum+(remainder*remainder*remainder);
			 num = num/10;
		 }
		 if (store == sum) 
		 {
			 System.out.println("this is a armstrong number"+num);
		 }
		 else 
		 {
			 System.out.println("this is not an armstrong number "+num);
		 }
		  
		 
	}
	
}

