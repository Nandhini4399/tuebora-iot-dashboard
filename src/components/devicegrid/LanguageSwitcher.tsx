import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';
import enIcon from '../../icons/en.svg?url';
import frIcon from '../../icons/fr.svg?url';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      className={styles.languageSelect}
      onClick={toggleLanguage}
      aria-label="Language Switcher"
      type="button"
    >
      <span className={styles.languageIcon}>
        <img src={i18n.language === 'en' ? enIcon : frIcon} alt={i18n.language === 'en' ? 'EN' : 'FR'} />
      </span>
    </button>
  );
};

export default LanguageSwitcher;
