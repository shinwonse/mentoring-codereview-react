import FilledStar from '@assets/icons/FilledStar';
import Star from '@assets/icons/Star';
import Layout from '@components/Layout';
import Modal from '@components/Modal';
import useExhibition from '@hooks/useExhibition';
import useFavoriteExhibitionList from '@hooks/useFavoriteExhibitionList';
import { cn } from '@utils/cn';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Exhibition() {
  const navigate = useNavigate();
  const { favoriteExhibitionList, updateFavoriteExhibitionIds } =
    useFavoriteExhibitionList();
  const { id } = useParams<{ id: string }>();
  const { exhibition } = useExhibition(Number(id));

  const [isFavorite, setIsFavorite] = useState(
    exhibition instanceof Error
      ? false
      : favoriteExhibitionList?.some((favoriteExhibition) => {
          return favoriteExhibition.id === exhibition?.id;
        })
  );
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavoriteExhibition = () => {
    if (exhibition instanceof Error) return;
    setIsFavorite((prev) => !prev);
    updateFavoriteExhibitionIds(exhibition?.id as number);
  };

  const handleClickConfirm = () => {
    setIsConfirmModalOpen(false);
    setIsModalOpen(true);
  };

  const handleClickCancel = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <Layout header title="예매하기">
      {exhibition instanceof Error ? (
        <div>존재하지 않는 전시회입니다.</div>
      ) : (
        <>
          <img
            alt={exhibition?.title}
            className={cn('w-[390px] h-[390px]')}
            src={exhibition?.imageUrl}
          />
          <div className={cn('flex flex-col px-3')}>
            <h1 className={cn('text-[32px] font-semibold mt-3')}>
              {exhibition?.title}
            </h1>
            <p className={cn('text-2xl text-[#ea3800] font-semibold mt-2')}>
              {exhibition?.price}원
            </p>
            <div className={cn('flex flex-row justify-between items-end')}>
              <div>
                <p className={cn('font-semibold mt-4')}>{exhibition?.place}</p>
                <p className={cn('font-semibold mt-0.5')}>
                  {exhibition?.date.started} ~ {exhibition?.date.ended}
                </p>
              </div>
              <button onClick={toggleFavoriteExhibition} type="button">
                {isFavorite ? <FilledStar size={32} /> : <Star size={32} />}
              </button>
            </div>
            <button
              className={cn(
                'mt-4 py-[15px] rounded bg-[#ffbf66] w-full text-white'
              )}
              onClick={() => setIsConfirmModalOpen(true)}
              type="button"
            >
              예매하기
            </button>
          </div>
        </>
      )}
      {isConfirmModalOpen && (
        <Modal isOpen={isConfirmModalOpen}>
          <div
            className={cn(
              'flex flex-col justify-between w-[266px] p-2 text-center h-full'
            )}
          >
            <div className={cn('py-[26px]  font-medium')}>
              <p>
                티켓을 예매하시겠습니까?
                <br />
                예매 내역은 이메일로 전송됩니다.
              </p>
            </div>
            <div className={cn('flex flex-col w-full h-full text-white')}>
              <button
                className={cn('py-2 bg-[#ffbf66] rounded')}
                onClick={handleClickConfirm}
                type="button"
              >
                확인
              </button>
              <button
                className={cn('py-2 bg-[#d9d9d9] rounded mt-2')}
                onClick={handleClickCancel}
                type="button"
              >
                취소
              </button>
            </div>
          </div>
        </Modal>
      )}
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <div className={cn('w-[266px] p-2')}>
            <p className={cn('py-[38px] px-[50px]')}>예매가 완료되었습니다.</p>
            <button
              className={cn('py-2 bg-[#ffbf66] rounded w-full text-white')}
              onClick={() => navigate(-1)}
              type="button"
            >
              확인
            </button>
          </div>
        </Modal>
      )}
    </Layout>
  );
}

export default Exhibition;
