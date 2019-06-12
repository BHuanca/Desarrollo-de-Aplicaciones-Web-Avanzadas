import md5 from 'md5';

const getAvatar = email => {
	return `https://www.gravatar.com/avatar/${md5(email)}?=identicon`;
};

export default getAvatar;
