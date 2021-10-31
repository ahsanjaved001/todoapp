require('dotenv').config();
import mysql from './Mysql';
import jwt from './Jwt';
import googleclient from './GoogleClient';

export default {
    mysql,
    jwt,
    googleclient
};