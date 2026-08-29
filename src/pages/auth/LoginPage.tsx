import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import { login } from '../../api/auth/AuthApi';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useMutation({
        mutationFn: login,

        onSuccess: (data) => {
            console.log('로그인 성공', data);

            navigate('/dashboard');
        },

        onError: (error) => {
            console.error('로그인 실패', error);
            alert('아이디 또는 비밀번호를 확인해주세요.');
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        loginMutation.mutate({
            loginId,
            password,
        });
    };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-4">
      <div className="w-full max-w-[400px]">

        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-black tracking-[0.25em] text-[#191f28]">
            ESSUNO
          </h1>

          <p className="mt-3 text-sm text-[#8b95a1]">
            Back Office
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-[#e5e8eb] bg-white p-8 shadow-sm">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-[#191f28]">
              로그인
            </h2>

            <p className="mt-2 text-sm text-[#8b95a1]">
              관리자 계정으로 로그인해주세요.
            </p>
          </div>

           <form className="space-y-5"  onSubmit={handleSubmit}>
            <div>
                <label
                htmlFor="text"
                className="mb-2 block text-sm font-semibold text-[#4e5968]"
                >
                아이디
                </label>

                <input
                id="loginId"
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="아이디를 입력해주세요"
                className="h-12 w-full rounded-xl border border-[#e5e8eb] px-4 text-sm outline-none transition placeholder:text-[#b0b8c1] focus:border-[#3182f6] focus:ring-4 focus:ring-[#3182f6]/10"
                />
            </div>

            <div>
                <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#4e5968]"
                >
                비밀번호
                </label>

                <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                className="h-12 w-full rounded-xl border border-[#e5e8eb] px-4 text-sm outline-none transition placeholder:text-[#b0b8c1] focus:border-[#3182f6] focus:ring-4 focus:ring-[#3182f6]/10"
                />
            </div>

            <div className="flex items-center">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-[#6b7684]">
                <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#3182f6]"
                />
                로그인 상태 유지
                </label>
            </div>

            <button
                type="submit"
                disabled={loginMutation.isPending}
                className="h-12 w-full rounded-xl bg-[#191f28] text-sm font-bold text-white transition hover:bg-[#333d4b]"
            >
                {loginMutation.isPending ? '로그인 중...' : '로그인'}
            </button>
            </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#b0b8c1]">
          © 2026 ESSUNO. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default LoginPage