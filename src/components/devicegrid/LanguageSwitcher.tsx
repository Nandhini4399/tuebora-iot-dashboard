import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <select
      className={styles.languageSelect}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      value={i18n.language}
      aria-label="Language Switcher"
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default LanguageSwitcher;
