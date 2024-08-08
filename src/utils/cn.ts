// 一个微小的（239B）实用程序，用于有条件地构造className字符串。
import { type ClassValue, clsx } from 'clsx'
// 用于在JS中高效合并Tailwind CSS类，而不会发生样式冲突。
import { twMerge } from 'tailwind-merge'

// 合并cls，防止冲突
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { cn }
