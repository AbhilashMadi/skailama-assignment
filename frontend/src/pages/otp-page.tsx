import { Button, OtpInput } from '@custom'

export default function OtpPage() {
  return (<form className="space-y-4">
    <p className="text-muted">Enter the 6-digit verification code that was sent to your email address.</p>
    <OtpInput className="mt-2" />
    <Button className="w-full">Submit OTP</Button>
  </form>)
}