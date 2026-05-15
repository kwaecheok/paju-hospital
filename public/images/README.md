# 이미지 교체 가이드

이 폴더에 실제 병원 사진을 넣으면 자동으로 적용됩니다.

## 필요한 이미지 목록

### 히어로 슬라이더 (권장 크기: 1920×1080px)
| 파일명 | 내용 |
|--------|------|
| `hero/slide1.jpg` | 병원 외관 또는 메인 이미지 |
| `hero/slide2.jpg` | 치료 장면 (침치료, 추나 등) |
| `hero/slide3.jpg` | 의료진 또는 병원 내부 |

### 병원 소개
| 파일명 | 내용 |
|--------|------|
| `about/hospital-main.jpg` | 병원 내부 전경 (권장: 800×600px) |
| `about/facilities-1.jpg` | 시설 사진 1 |
| `about/facilities-2.jpg` | 시설 사진 2 |

### 의료진 (권장 크기: 400×533px, 3:4 비율)
| 파일명 | 내용 |
|--------|------|
| `doctors/doctor1.jpg` | 대표원장 증명사진 |
| `doctors/doctor2.jpg` | 부원장 증명사진 |
| `doctors/doctor3.jpg` | 의료진 증명사진 |

## 이미지 교체 방법

1. 위 목록에 맞는 폴더와 파일명으로 이미지를 저장합니다.
2. 각 컴포넌트에서 `TODO` 주석을 찾아 `<Image>` 태그로 교체합니다.

### 예시 (Hero.tsx)
```tsx
// 변경 전 (placeholder):
<div className="...bg-gradient...">...</div>

// 변경 후 (실제 이미지):
import Image from 'next/image'
<Image
  src="/images/hero/slide1.jpg"
  alt="파주쾌척한방병원 메인"
  fill
  className="object-cover"
  priority
/>
```

### 예시 (DoctorSection.tsx)
```tsx
// 변경 전:
<div className="...placeholder...">...</div>

// 변경 후:
<Image
  src={doctor.imageSrc}   // lib/constants.ts의 경로 참조
  alt={doctor.name}
  fill
  className="object-cover object-top"
/>
```

## 권장 이미지 형식
- 형식: `.jpg` 또는 `.webp` (파일 크기 절감)
- 히어로: 1920×1080px 이상
- 의료진: 400×533px (3:4 비율 유지)
- 병원 내부: 800×600px 이상
