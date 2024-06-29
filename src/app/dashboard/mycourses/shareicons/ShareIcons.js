import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center
} from "@chakra-ui/react";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { FaShare } from "react-icons/fa";
export default function ShareIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}><FaShare /></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>share</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'} justifyContent={"space-between"} >
            <EmailShareButton url="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=445112211283-sk04feuogpcjd3dq8eshrdnr4bpm1sfk.apps.googleusercontent.com&response_type=code&access_type=offline&scope=openid%20email%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar%20https%3A%2F%2Fwww.google.com%2Fm8%2Ffeeds%2F%20https%3A%2F%2Fmail.google.com%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.birthday.read&prompt=consent&include_granted_scopes=true&redirect_uri=https%3A%2F%2Foutlook.office.com%2Fmail%2FoauthRedirect.html%3Fapp%3Dnative&login_hint=anand1999m%40gmail.com&state=Y29ycmVsYXRpb25faWQ9MWNhYWQwNGYtMmQzYi1mY2U4LTRkNDMtOTAwNjE4N2I1YTVjJmxvZ2luX2hpbnQ9YW5hbmQxOTk5bUBnbWFpbC5jb20mdHlwZV9oaW50PUdvb2dsZSZpbnN0YW5jZV9pZD0x&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow">
              <EmailIcon size={32} round={true}></EmailIcon>
            </EmailShareButton>
            <FacebookShareButton url="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fgithub.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
              <FacebookIcon size={32} round={true}></FacebookIcon>
            </FacebookShareButton>
            <TelegramShareButton url="https://telegram.me/share/url?url=http%3A%2F%2Fgithub.com&text=GitHub">
              <TelegramIcon size={32} round={true}></TelegramIcon>
            </TelegramShareButton>
            <TwitterShareButton url="https://x.com/intent/tweet?url=http%3A%2F%2Fgithub.com&text=GitHub">
              <TwitterIcon size={32} round={true}></TwitterIcon>
            </TwitterShareButton>
            <WhatsappShareButton url="https://web.whatsapp.com/send?text=GitHub%3A%3A%20http%3A%2F%2Fgithub.com"> 
              <WhatsappIcon size={32} round={true}></WhatsappIcon>
            </WhatsappShareButton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
