import Media from 'react-media';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function SiteHeader() {
  return (
    <Media query={{ minWidth: '1200px' }} defaultMatches={false}>
      {(match) => (match ? <DesktopHeader /> : <MobileHeader />)}
    </Media>
  );
}
