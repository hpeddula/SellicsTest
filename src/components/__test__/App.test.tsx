import React from 'react';
import App from '../App';
import { render, fireEvent,act } from '../../test-utils/test-utils';
import { appMockState, appMockStateWithNoApprovedImages, withStateError,withLoadingTrue } from '../../mockData/AppMock';




describe('Test Suite for App Component', () => {
  let fetchMock: jest.SpyInstance<Promise<Response>, [input: RequestInfo, init?: RequestInit | undefined]>;
  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve<any>({
        json: () => Promise.resolve({
           urls: { small: '', thumb: '' }, id: '1' 
            })
      }))
  });

  afterEach(() => {
    fetchMock.mockClear()
  });
  test('Initial Load', async () => {
    const container = render(<App />, { initialState: { ...appMockState } });
    expect(container.getByTestId('fetchRandomImageButton')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('fetchRandomImageButton'))
    expect(fetchMock).toBeCalledTimes(1)
  });
  test('No Approved Images', async () => {
    const container = render(<App />, { initialState: { ...appMockStateWithNoApprovedImages } });
    expect(container.getByTestId('fetchRandomImageButton')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('fetchRandomImageButton'))
    expect(fetchMock).toBeCalledTimes(1);
  });
  test('Click Cancel', async () => {
    const container = render(<App />, { initialState: { ...appMockState } });
    expect(container.getByTestId('cancel')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('cancel')) 
    expect(fetchMock).toBeCalledTimes(1);
  });
  test('Click on Approve', async() => {
    const container = render(<App />, { initialState: { ...appMockState } });
    expect(container.getByTestId('approve')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('approve'))
    expect(fetchMock).toBeCalledTimes(1);
  })
  test('Click on Approve with altered URL', async() => {
    const errorMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve<any>({
        json: () => Promise.resolve({
            errors:["Couldn't find Photo"]
            })
      }))
    const container = render(<App />, { initialState: { ...withStateError } });
    expect(container.getByTestId('approve')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('approve'))
    expect(errorMock).toBeCalledTimes(1);
    errorMock.mockClear();
  })
  test('Err Case', async () => {
    const rejectMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.reject<any>('Error'))
    const container = render(<App />, { initialState: { ...appMockState } });
    expect(container.getByTestId('approve')).toBeInTheDocument();
    await act(async()=>{fireEvent.click(container.getByTestId('approve'))})
    expect(rejectMock).toBeCalledTimes(1);
    rejectMock.mockClear();
  })
  test('Should Show Skeleton Loader when loading is true',async() => {
    const container = render(<App />, { initialState: { ...withLoadingTrue } });
    expect(container.getByTestId('loader')).toBeInTheDocument();
  })
})
