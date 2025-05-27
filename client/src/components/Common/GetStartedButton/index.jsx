import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      Get Started
    </LinkTo>
  );
};

export default GetStartedButton;
