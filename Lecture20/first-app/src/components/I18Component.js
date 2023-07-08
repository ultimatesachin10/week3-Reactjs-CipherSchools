import React from "react";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../i18n";

const I18Component = () => {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const index = 11;

  return (
    <div>
      <div>
        <h2>{t("Welcome to React")}</h2>
        <button onClick={() => changeLanguage("de")}>German</button>
        <button onClick={() => changeLanguage("en")}>English</button>
      </div>
      <div>
        <Trans i18nKey="translations:toGetStarted">
          To get started, follow me on LinkedIn
        </Trans>
        <Trans i18nKey="translations:welcome">trans</Trans>
        <Trans>{index + 1}</Trans>
      </div>
    </div>
  );
};

export default I18Component;
