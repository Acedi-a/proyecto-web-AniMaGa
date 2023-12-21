import com.resend.*;

public class Main {
    public static void main(String[] args) {
        Resend resend = new Resend("re_jVHg4Xoo_Mb65sjfywpWU3yNjC5Z1QsVi");

        SendEmailRequest sendEmailRequest = SendEmailRequest.builder()
                .from("onboarding@resend.dev")
                .to("sinacedia1@gmail.com")
                .subject("Hello World")
                .html("<p>Congrats on sending your <strong>first email</strong>!</p>")
                .build();

        SendEmailResponse data = resend.emails().send(sendEmailRequest);
    }
}