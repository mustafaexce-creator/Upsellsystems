import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer"
      className="whatsapp-float" aria-label="Chat on WhatsApp">
      <MessageCircle size={26} color="white" fill="white" />
      <span className="tooltip">Chat with us on WhatsApp</span>
    </a>
  )
}
