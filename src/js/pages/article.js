import Collapse from '../classes/Collapse';
import { sharePage } from '../utils'

document.querySelector('.share-article').onclick = () => {
    sharePage(undefined, 'eshterak ghozari maghale', 'link in maghale ra ba rafighaye khod be eshterak bezar dada.')
}

const contextListCollapse = document.querySelector('#list_of_content')

new Collapse(contextListCollapse, 40, true).initialize()