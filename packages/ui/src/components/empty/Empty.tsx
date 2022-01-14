import { isUndefined } from 'lodash';
import { useMemo } from 'react';

import { usePrefixConfig, useComponentConfig, useTranslation, useThemeConfig } from '../../hooks';
import { generateComponentMate, getClassName } from '../../utils';
import { DIcon } from '../icon';

export interface DEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  dIcon?: React.ReactNode;
}

const { COMPONENT_NAME } = generateComponentMate('DEmpty');
export function DEmpty(props: DEmptyProps) {
  const { dIcon, className, children, ...restProps } = useComponentConfig(COMPONENT_NAME, props);

  //#region Context
  const dPrefix = usePrefixConfig();
  const theme = useThemeConfig();
  //#endregion

  const [t] = useTranslation('Common');

  const descriptionNode = useMemo(() => <div className={`${dPrefix}empty__description`}>{t('No Data')}</div>, [dPrefix, t]);

  return (
    <div {...restProps} className={getClassName(className, `${dPrefix}empty`)}>
      {isUndefined(dIcon) ? (
        <DIcon viewBox="0 -20 1442 1024" dSize={[140, 104]}>
          <path
            d="M159.816113 858.429296c0 88.496676 253.605859 160.263211 566.430648 160.263211s566.416225-71.766535 566.416225-160.263211c0-88.511099-253.605859-160.277634-566.416225-160.277634-312.824789 0.014423-566.430648 71.766535-566.430648 160.277634z"
            fill="#fff"
            fillOpacity={0.08}
          ></path>
          <path
            d="M1072.676056 750.101634L828.516958 965.632l-8.797747-416.695887 259.562366-154.739381-6.605521 355.904902z"
            fill={theme === 'light' ? '#F5F9FF' : '#595d63'}
          ></path>
          <path
            d="M820.815324 961.233127l-455.319437-133.754592V672.739155l383.82693 113.851493c25.311549-177.945239 46.19538-247.577239 61.584225-209.992113 15.41769 37.556282 18.720451 165.77262 9.908282 384.634592z"
            fill={theme === 'light' ? '#E1E5EC' : '#42474f'}
          ></path>
          <path
            d="M814.224225 542.316169l-122.072338-26.537465-7.701633-87.314028v-148.119437l382.745239 107.217127h13.19662l-266.167888 154.753803z"
            fill={theme === 'light' ? '#D4DAE2' : '#3f444d'}
          ></path>
          <path
            d="M692.137465 521.33138l-317.843831-88.424563 317.858253-154.753803z"
            fill={theme === 'light' ? '#F0F1F4' : '#595959'}
          ></path>
          <path d="M1176.056789 597.583324l-93.486874-191.213972v165.801465z" fill={theme === 'light' ? '#E1E5EC' : '#42474f'}></path>
          <path
            d="M691.041352 526.840789c-3.302761 0-5.494986-2.206648-5.494986-5.538254V289.215099c0-3.317183 2.192225-5.538254 5.494986-5.538254 3.317183 0 5.509408 2.22107 5.509409 5.538254v232.116281c-0.014423 3.302761-2.22107 5.509408-5.509409 5.509409z"
            fill={theme === 'light' ? '#ACB5C3' : '#3a404a'}
          ></path>
          <path
            d="M814.224225 555.570479h-1.096112l-446.52169-114.947606c-2.206648-1.096113-4.398873-2.206648-4.398874-4.413296 0-2.22107 1.096113-4.427718 3.302761-5.538253l324.434929-155.835493c1.096113-1.110535 2.206648-1.110535 3.302761 0l388.254648 108.313239a8.610254 8.610254 0 0 1 4.384451 4.427719 8.466028 8.466028 0 0 1-2.192226 5.523831l-266.167887 161.388169c-1.096113 0-2.22107 1.08169-3.302761 1.08169z m-430.036732-122.663662l428.926197 110.53431 252.971268-153.628845-373.933071-104.996057-307.964394 148.090592z"
            fill={theme === 'light' ? '#ACB5C3' : '#3a404a'}
          ></path>
          <path
            d="M828.516958 973.376901h-2.192226c-2.206648-1.096113-3.317183-2.206648-3.317183-4.427718l-14.27831-418.888113c0-2.22107 1.096113-4.427718 2.192226-4.427718l266.167887-161.388169c2.192225-1.096113 3.302761-1.096113 5.494986 0 2.206648 1.124958 3.317183 3.317183 3.317183 4.442141v363.620958c0 1.110535-1.110535 3.317183-2.206648 4.427718L831.819718 973.376901h-3.30276z m-8.797747-421.109183l13.182197 403.427155 240.885184-206.674929v-351.477183L819.719211 552.253296z"
            fill={theme === 'light' ? '#ACB5C3' : '#3a404a'}
          ></path>
          <path
            d="M828.516958 973.376901h-1.096113l-460.828845-134.836281c-2.206648-1.110535-4.413296-3.317183-4.413296-5.523831v-161.388169c0-3.317183 2.206648-5.523831 5.509409-5.523831s5.509408 2.206648 5.509408 5.538253v158.042141l449.824451 132.629634v-1.110535c0-3.317183 2.192225-5.523831 5.494986-5.523831 3.317183 0 5.509408 2.206648 5.509408 5.523831v7.730479c0 2.22107-1.096113 3.317183-2.206648 4.427718h-3.30276v0.014422z"
            fill={theme === 'light' ? '#ACB5C3' : '#3a404a'}
          ></path>
          <path
            d="M741.635606 785.46569l-459.732733-141.470648 85.78524-208.896 446.536112 114.947606z"
            fill={theme === 'light' ? '#FFFFFF' : '#595959'}
          ></path>
          <path
            d="M741.635606 791.003944h-1.096113l-460.843268-141.485071c-1.096113 0-2.192225-1.096113-3.30276-3.317183a3.374873 3.374873 0 0 1 0-4.413296l85.785239-208.896c1.110535-2.22107 3.317183-4.427718 6.605521-3.317183l446.536113 114.947606c1.110535 0 2.206648 1.110535 3.317183 2.22107a3.374873 3.374873 0 0 1 0 4.413296l-72.603042 236.544c0 2.192225-2.192225 3.302761-4.398873 3.302761zM288.508394 640.692282l449.824451 138.167887 69.285859-225.481915-436.627831-111.630423-82.482479 198.944451zM1173.864563 608.630986h-1.096112l-93.501296-26.537465c-2.192225-1.096113-4.398873-3.317183-4.398873-5.523831V387.576789c0-2.206648 2.206648-4.427718 4.398873-5.538254 2.206648-1.096113 5.509408 1.110535 6.605521 3.317183l93.486873 195.64169v22.109747c0 2.22107-1.096113 3.317183-2.192225 4.427718-1.110535 1.096113-2.206648 1.096113-3.317183 1.096113z m-87.977464-36.460169l82.468056 24.316394v-11.047662L1085.872676 413.018141v159.152676z m17.595493-269.701409c-41.81093 0-80.290254-15.47538-86.895775-18.792563l2.206648-5.523831c8.797746 4.427718 87.977465 36.474592 146.258929 2.206648-15.388845-8.855437-27.489352-19.903099-32.984338-36.474592v-1.110535c-5.509408-24.316394 2.192225-38.681239 8.797747-47.522253 9.908282-12.143775 27.503775-18.792563 46.19538-17.682028 14.27831 0 25.297127 4.427718 30.792113 12.158197 4.398873 5.523831 5.494986 12.143775 4.398873 20.999211-3.317183 22.109746-23.104901 51.949972-47.291493 68.521465 17.595493 7.744901 38.508169 11.047662 53.897014 11.047662 53.897014-2.206648 104.476845-54.15662 120.976225-124.899155l5.509409 1.110535c-17.595493 74.059718-70.381972 127.105803-126.485634 129.326873-16.49938 1.110535-39.604282-3.317183-59.392-13.268732-19.802141 15.47538-43.988732 19.903099-65.997521 19.903098z m34.08045-58.584338c5.509408 15.47538 17.595493 26.523042 32.998761 34.267944l1.096112-1.110535c23.104901-15.47538 42.907042-44.219493 46.195381-66.314817 1.096113-7.730479 0-13.268732-3.317183-17.682028-4.398873-5.538254-15.388845-9.951549-26.39324-9.951549-13.19662 0-30.792113 3.317183-41.796507 16.585915-6.605521 6.634366-13.19662 19.903099-7.716056 42.012845l-1.067268 2.192225z"
            fill={theme === 'light' ? '#ACB5C3' : '#3a404a'}
          ></path>
          <path
            d="M1399.317634 15.085972c-7.701634-11.033239-61.584225 1.110535-85.770817 37.585127-6.605521 11.047662-14.307155 45.315606-8.797747 37.585126 14.292732-20.999211 40.671549-8.855437 60.488113-25.426929 16.484958-14.364845 40.685972-40.887887 34.080451-49.743324z"
            fill={theme === 'light' ? '#F0F1F4' : '#595959'}
          ></path>
          <path
            d="M1304.74907 93.573408h-2.206647c-5.494986-3.317183 5.509408-35.364056 8.812169-41.998422C1330.046197 22.830873 1367.458254 9.562141 1386.149859 8.466028c7.687211 0 12.086085 2.22107 14.292733 5.538254 9.908282 14.364845-32.998761 53.046085-34.094874 53.046084-9.908282 8.855437-20.912676 9.951549-31.888225 11.047662-10.989972 2.22107-22.008789 3.317183-28.585465 13.268733 1.08169 1.096113-0.028845 2.206648-1.124958 2.206647zM1387.231549 12.879324c-18.691606 0-52.786479 13.268732-70.381972 39.806197-4.413296 6.634366-7.701634 22.095324-9.893859 29.825803 8.797746-8.855437 18.691606-9.951549 28.585465-11.047662 9.893859-1.110535 19.802141-3.317183 28.585465-9.951549 18.706028-16.571493 37.397634-39.777352 32.99876-45.315606-1.110535-2.206648-4.384451-3.317183-9.893859-3.317183z"
            fill={theme === 'light' ? '#94A0B2' : '#4f5f78'}
          ></path>
          <path
            d="M1332.238423 65.939831l-4.398874-3.317183C1347.627268 37.181296 1370.717746 17.307042 1419.134197 4.009465c4.398873-1.096113 6.591099-2.206648 7.672789-2.206648 2.206648-1.110535 2.206648-1.110535 8.812169-1.110535l1.096113 5.538253c-5.494986 1.096113-5.494986 1.096113-7.701634 1.096113-1.096113 0-3.302761 1.110535-7.687211 2.22107-47.291493 12.17262-70.381972 30.965183-89.088 56.37769z"
            fill={theme === 'light' ? '#94A0B2' : '#4f5f78'}
          ></path>
          <path
            d="M324.795493 863.953127c-1.110535 11.047662-47.305915 24.330817-80.290254 8.855436-10.989972-4.427718-29.681577-25.42693-23.104901-22.109746 19.802141 7.730479 34.094873-9.951549 56.103662-7.744902 17.595493 3.317183 47.27707 12.17262 47.27707 20.999212z"
            fill={theme === 'light' ? '#F0F1F4' : '#595959'}
          ></path>
          <path
            d="M278.600113 882.74569a94.756056 94.756056 0 0 1-35.190986-6.634366c-7.687211-3.317183-28.585465-19.903099-25.282704-25.412507 0 0 1.096113-3.317183 5.494985-1.110535 9.908282 4.427718 17.595493 1.110535 27.503775-2.206648 8.797746-3.317183 17.595493-6.634366 28.599887-4.427719 9.879437 1.096113 49.469296 9.951549 49.469296 23.220282 0 3.317183-2.192225 6.634366-7.672789 8.826592-9.922704 3.317183-25.325972 7.744901-42.921464 7.744901z m-52.786479-27.619155c4.398873 5.523831 13.182197 12.143775 18.691605 15.460958 25.282704 11.047662 58.295887 6.634366 71.492507-2.206648 3.302761-2.206648 4.398873-3.317183 4.398874-4.427718 0-5.523831-23.090479-14.364845-45.084845-17.682028-9.908282-1.110535-17.595493 2.206648-25.297127 4.427718-6.605521 3.317183-14.292732 6.634366-24.201014 4.427718z"
            fill={theme === 'light' ? '#94A0B2' : '#4f5f78'}
          ></path>
          <path
            d="M341.294873 866.174197c-20.898254-5.538254-38.493746-3.317183-53.882591-2.22107-15.403268 1.110535-27.489352 2.22107-40.700395-2.206648l2.192226-5.538254c11.004394 4.427718 24.215437 3.317183 38.508169 2.221071 16.484958-1.110535 34.094873-3.317183 54.993126 2.206648l-1.110535 5.538253z"
            fill={theme === 'light' ? '#94A0B2' : '#4f5f78'}
          ></path>
        </DIcon>
      ) : (
        dIcon
      )}
      {isUndefined(children) ? descriptionNode : children}
    </div>
  );
}