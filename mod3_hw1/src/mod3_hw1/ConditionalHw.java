package mod3_hw1;
import java.util.Scanner;

public class ConditionalHw {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int grade;
		System.out.println("Enter Grade: ");
		
		Scanner scanner = new Scanner(System.in);	
		int grade = grade.nextInt();
		
		if(grade > 90)
		{
			System.out.println("You Have an A");
		}
		if(grade > 80)
		{
			System.out.println("You Have an B");
		}
		if(grade > 70)
		{
			System.out.println("You Have an C");
		}
		if(grade > 60)
		{
			System.out.println("You Have an D");
		}
	}

}
