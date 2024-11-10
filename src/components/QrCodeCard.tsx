import { Card, CardContent, CardHeader } from '@/components/ui/card';
import qrCodeImg from '@/assets/images/image-qr-code.png';

function QrCodeCard() {
  return (
    <Card className='rounded-[1.25rem] max-w-80 w-full'>
      <CardHeader className='p-4'>
        <img
          src={qrCodeImg}
          alt='qr code image'
          className='rounded-[10px] object-cover w-full'
        />
      </CardHeader>
      <CardContent className='p-4 pt-2 mb-6 text-center font-outfit'>
        <div className='px-4'>
          <h2 className='text-xl font-bold tracking-normal text-primary mb-4'>
            Improve your front-end skills by building projects
          </h2>
          <p className='text-[0.95rem] leading-[1.3rem] text-primary-foreground'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default QrCodeCard;
