  
import firebase from 'firebase/app';

export interface MessageI {
  uid?: string | null | undefined;
  name: string | null | undefined;
  message: string;
  createdAt?: any;
  image?: string | null | undefined;
  dateString?: string;
}