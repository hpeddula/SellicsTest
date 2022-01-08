import appImageSlice , { setApprovedImages,setImageData,setRejectedImages,reset,setError,initialState } from '../appImageSlice';

describe('Test Suite for App Image Slice',()=>{
    it('tests setApprovedImages action',()=> {
        expect(appImageSlice(initialState,{
            type:setApprovedImages.type,
            payload:{url:''}
        })).toEqual({...initialState,approvedImages:['']})
    })
    it('tests setImageData action with Rejected images',()=> {
        expect(appImageSlice({...initialState,rejectedImages:['1']},{
            type:setImageData.type,
            payload:{urls:{small:'I am a small image url'}, id:'1',alt:''}
        })).toEqual({...initialState,rejectedImages:['1']})
    })
    it('tests setImageData action without Rejected images',()=> {
        expect(appImageSlice({...initialState,rejectedImages:[]},{
            type:setImageData.type,
            payload:{urls:{small:'I am a small image url'}, id:'1',alt:''}
        })).toEqual({...initialState,urls:{small:'I am a small image url'}, id:'1',alt:''})
    })
    it('tests setRejectedImages action',()=> {
        expect(appImageSlice({...initialState},{
            type:setRejectedImages.type,
            payload:{id:'1'}
        })).toEqual({...initialState,rejectedImages:['1']})
    })
    it('test reset action',()=>{
        expect(appImageSlice({...initialState},{
            type:reset.type,
        })).toEqual({...initialState})
    })
    it('tests setError action',()=> {
        expect(appImageSlice({...initialState,loading:true},{
            type:setError.type,
            payload:{error:'Error'}
        })).toEqual({...initialState,error:'Error',loading:false})
    })
})