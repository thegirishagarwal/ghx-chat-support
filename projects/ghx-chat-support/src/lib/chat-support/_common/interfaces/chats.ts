export interface Chats {
    userImg: string;
    userName: string;
    userDesignation: string;
    contactName: string | number;
    userAvailability?: UserAvailability;
}

export type ChatBoxType = 'skype' | 'whatsapp' | 'messenger' | 'telegram';

interface UserAvailability {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}
