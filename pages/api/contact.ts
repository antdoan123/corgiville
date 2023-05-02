import send from 'gmail-send';

const sendEmail = send({
  user: 'doan.notifier@gmail.com',
  pass: 'jolnxvmaiqmmixdk',
  to: 'antdoan123@gmail.com',
  subject: `Antdoan - Business Inquires`,
});

export default async function handler(req: any, res: any): Promise<void> {
  if (req.method == 'POST') {
    try {
      const body = req.body;
      const { result } = await sendEmail(body);
      res.status(200).json({ msg: 'Successfully sent the email.', result: result });
    } catch (error) {
      res.status(400).json({ msg: 'Something went wrong when sending the email.' });
    }
  }
}
