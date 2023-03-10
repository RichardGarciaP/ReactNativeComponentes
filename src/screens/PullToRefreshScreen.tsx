import React, {useCallback, useState} from 'react';
import {RefreshControl, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>('Hola Mundo');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      horizontal={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856d6"
          colors={['white', 'red', 'orange']}
          // style={{backgroundColor: '#5856d6'}}
          // tintColor="white"
          // title="Refreshing"
          // titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
