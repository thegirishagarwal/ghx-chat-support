export type ChatBoxType = 'skype' | 'whatsapp' | 'messenger' | 'telegram';

export interface GhxChats {
    userImg: string;
    userName: string;
    userDesignation: string;
    contactName: string | number;
    userAvailability?: UserAvailability;
    type?: ChatBoxType;
}

interface UserAvailability {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}
