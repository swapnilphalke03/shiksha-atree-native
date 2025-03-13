import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTranslation } from '../../context/LanguageContext';
import PropTypes from 'prop-types';

import GlobalText from "@components/GlobalText/GlobalText";

const CustomCardLanguage = ({
  title,
  style,
  bold,
  clickEvent,
  value,
  active,
}) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={{ width: '50%' }}
      onPress={() => clickEvent(value)}
    >
      <View style={active ? [styles.cardActive, style] : [styles.card, style]}>
        <GlobalText
          style={[
            styles.title,
            {
              fontFamily:
                bold === 'bold' ? 'Poppins-Medium' : 'Poppins-Regular',
            },
          ]}
        >
          {t(title)}
        </GlobalText>
      </View>
    </TouchableOpacity>
  );
};

CustomCardLanguage.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  bold: PropTypes.any,
  clickEvent: PropTypes.func,
  value: PropTypes.string,
  active: PropTypes.bool,
};

const styles = StyleSheet.create({
  card: {
    paddingLeft: 20,
    flex: 1,
    height: 60,
    justifyContent: 'center', // Center vertically
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0C5B4',
    margin: 10,
  },
  cardActive: {
    paddingLeft: 20,
    flex: 1,
    height: 60,
    justifyContent: 'center', // Center vertically
    backgroundColor: '#FEEDA1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0C5B4',
    margin: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
});

export default CustomCardLanguage;
