import {createWhaleBody} from './native/whale/figure.js';
export async function createHanfuBody(base,opts){
 return createWhaleBody(base,{...opts,scheme:'deepseek-hanfu',asset:p=>new URL((p.startsWith('tex/')||p.startsWith('feat/'))?'native/whale/'+p:p,base)});
}
