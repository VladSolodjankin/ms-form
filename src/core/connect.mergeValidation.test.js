
import {mergeValidation} from './connect'

describe('ms-rx.-form', function() {

  it('mergeValidation add', function() {
    let res = mergeValidation({field:'error'}, {field2:'error2'})
    expect(res).deep.equal({field:'error',field2:'error2'})
  })

  it('mergeValidation erase', function() {
    let res = mergeValidation({field:'error'}, {field:null})
    expect(res).deep.equal({})
  })

})