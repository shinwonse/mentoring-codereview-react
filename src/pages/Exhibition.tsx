import Star from '@assets/icons/Star';
import Layout from '@components/Layout';
import useExhibition from '@hooks/useExhibition';
import { cn } from '@utils/cn';
import { useParams } from 'react-router-dom';

function Exhibition() {
  const { id } = useParams<{ id: string }>();
  const { exhibition } = useExhibition(Number(id));

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
              <button type="button">
                <Star size={32} />
              </button>
            </div>
            <button
              className={cn(
                'mt-4 py-[15px] rounded bg-[#ffbf66] w-full text-white'
              )}
              type="button"
            >
              예매하기
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Exhibition;
