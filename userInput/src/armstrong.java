import java.util.Scanner;

public class armstrong {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
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
