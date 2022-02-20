export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  venueName: Scalars['String'];
  zip: Scalars['String'];
};

export type Booking = {
  __typename?: 'Booking';
  address: Address;
  createdAt: Scalars['String'];
  event: Event;
  id: Scalars['ID'];
  totalPrice: Scalars['Float'];
  user: User;
};

export type BookingResponse = {
  __typename?: 'BookingResponse';
  message: Scalars['String'];
  statusCode: Scalars['Int'];
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['String'];
  description: Scalars['String'];
  endTime: Scalars['String'];
  id: Scalars['ID'];
  startTime: Scalars['String'];
  title: Scalars['String'];
  user: User;
  users: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  deleteBooking: BookingResponse;
};


export type MutationDeleteBookingArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  booking: Booking;
  bookings: Array<Booking>;
};


export type QueryBookingArgs = {
  id: Scalars['ID'];
};


export type QueryBookingsArgs = {
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
};
