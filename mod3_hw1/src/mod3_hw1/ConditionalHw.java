package mod3_hw1;
import java.util.Scanner;

public class ConditionalHw {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int grade;
		System.out.println("Enter Grade: ");
		
		Scanner scanner = new Scanner(System.in);	
		grade = scanner.nextInt();
		
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
		
		
		int day = 1;
		
		switch (day) {
		  case 0:
		    System.out.println("Invalid Input");
		    break;
		  case 1:
		    System.out.println("Monday");
		    break;
		  case 2:
		    System.out.println("Tuesday");
		    break;
		  case 3:
		    System.out.println("Wednesday");
		    break;
		  case 4:
		    System.out.println("Thursday");
		    break;
		  case 5:
		    System.out.println("Friday");
		    break;
		  case 6:
		    System.out.println("Saturday");
		    break;
		  case 7:
		    System.out.println("Sunday");
		    break;
		  case 8:
			System.out.println("Invalid input");
			break;
		}
	}

}
